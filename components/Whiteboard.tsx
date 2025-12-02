import React, { useRef, useState, useEffect } from 'react';
import { X, Eraser, Pen, Trash2, Download, Square, Circle, Type } from 'lucide-react';

interface WhiteboardProps {
    onClose: () => void;
    sessionId: string;
}

type Tool = 'pen' | 'eraser' | 'rect' | 'circle' | 'text';

export const Whiteboard: React.FC<WhiteboardProps> = ({ onClose, sessionId }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(2);
    const [tool, setTool] = useState<Tool>('pen');
    const [snapshot, setSnapshot] = useState<ImageData | null>(null);
    const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);

    // Text Tool State
    const [textInput, setTextInput] = useState<{ x: number; y: number; value: string } | null>(null);
    const [isDraggingText, setIsDraggingText] = useState(false);
    const dragStartRef = useRef<{ x: number; y: number } | null>(null);
    const textInputRef = useRef<HTMLTextAreaElement>(null);

    // Initialize canvas and load saved data
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                // Save current content before resizing
                let tempCanvas: HTMLCanvasElement | null = null;
                if (canvas.width > 0 && canvas.height > 0) {
                    tempCanvas = document.createElement('canvas');
                    tempCanvas.width = canvas.width;
                    tempCanvas.height = canvas.height;
                    const tempCtx = tempCanvas.getContext('2d');
                    tempCtx?.drawImage(canvas, 0, 0);
                }

                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;

                // Restore content
                if (tempCanvas) {
                    ctx.drawImage(tempCanvas, 0, 0);
                }

                // Restore context settings
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.strokeStyle = color;
                ctx.lineWidth = brushSize;
                ctx.font = '20px sans-serif';
            }
        };

        // Load saved session
        const savedData = localStorage.getItem(`whiteboard_${sessionId}`);
        if (savedData) {
            const img = new Image();
            img.src = savedData;
            img.onload = () => {
                ctx.drawImage(img, 0, 0);
            };
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => window.removeEventListener('resize', resizeCanvas);
    }, [sessionId]);

    // Update context when settings change
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
        ctx.lineWidth = tool === 'eraser' ? brushSize * 5 : brushSize;
        ctx.fillStyle = color;
    }, [color, brushSize, tool]);

    // Focus text input when it appears
    useEffect(() => {
        if (textInput && textInputRef.current) {
            textInputRef.current.focus();
        }
    }, [textInput]);

    // Auto-commit text when switching tools
    useEffect(() => {
        if (tool !== 'text' && textInput) {
            handleTextSubmit();
        }
    }, [tool]);

    const saveSession = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            localStorage.setItem(`whiteboard_${sessionId}`, canvas.toDataURL());
        }
    };

    const getCoordinates = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;

        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = (e as React.MouseEvent).clientX;
            clientY = (e as React.MouseEvent).clientY;
        }

        return {
            offsetX: clientX - rect.left,
            offsetY: clientY - rect.top
        };
    };

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        // If dragging text, don't draw
        if (isDraggingText) return;

        if (tool === 'text') {
            // If clicking inside the text input (handled by bubbling), ignore here?
            // Actually, clicking on canvas while text input is open should commit it.
            if ((e.target as HTMLElement).tagName === 'TEXTAREA') return;

            const canvas = canvasRef.current;
            if (!canvas) return;
            const { offsetX, offsetY } = getCoordinates(e, canvas);

            if (textInput) {
                // Commit existing text
                handleTextSubmit();
                // Immediately start new text box at new location
                // We need to wait for state update or just set it directly?
                // handleTextSubmit sets textInput to null.
                // We can just set it to the new value directly here, effectively "committing and moving"
                // But handleTextSubmit needs to read the CURRENT value from state/ref.
                // Better to do it in one go if possible, or just accept the commit and let user click again?
                // User expects click -> commit old -> open new.
                
                // Let's try to commit manually here without clearing state, then update state.
                 if (textInput.value.trim()) {
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        ctx.save();
                        ctx.font = `${brushSize * 10}px sans-serif`;
                        ctx.fillStyle = color;
                        ctx.textBaseline = 'top';
                        const lines = textInput.value.split('\n');
                        const lineHeight = brushSize * 12;
                        lines.forEach((line, i) => {
                            ctx.fillText(line, textInput.x + 4, textInput.y + 4 + (i * lineHeight));
                        });
                        ctx.restore();
                        saveSession();
                    }
                }
                setTextInput({ x: offsetX, y: offsetY, value: '' });
                return;
            }

            if (e.type === 'touchstart') return;
            
            setTextInput({ x: offsetX, y: offsetY, value: '' });
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        setIsDrawing(true);
        const coords = getCoordinates(e, canvas);
        setStartPos({ x: coords.offsetX, y: coords.offsetY });

        if (tool === 'rect' || tool === 'circle') {
            setSnapshot(ctx.getImageData(0, 0, canvas.width, canvas.height));
        } else {
            ctx.beginPath();
            ctx.moveTo(coords.offsetX, coords.offsetY);
        }
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { offsetX, offsetY } = getCoordinates(e, canvas);

        if (tool === 'pen' || tool === 'eraser') {
            ctx.lineTo(offsetX, offsetY);
            ctx.stroke();
        } else if (tool === 'rect' || tool === 'circle') {
            if (!snapshot || !startPos) return;
            ctx.putImageData(snapshot, 0, 0);
            ctx.beginPath();

            if (tool === 'rect') {
                ctx.rect(startPos.x, startPos.y, offsetX - startPos.x, offsetY - startPos.y);
            } else {
                const radius = Math.sqrt(Math.pow(offsetX - startPos.x, 2) + Math.pow(offsetY - startPos.y, 2));
                ctx.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
            }
            ctx.stroke();
        }
    };

    const stopDrawing = () => {
        if (isDraggingText) {
            setIsDraggingText(false);
            dragStartRef.current = null;
            return;
        }

        if (isDrawing) {
            setIsDrawing(false);
            setSnapshot(null);
            setStartPos(null);
            saveSession();
        }
    };

    const handleTextSubmit = () => {
        if (!textInput) return;

        if (textInput.value.trim()) {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.save();
                    ctx.font = `${brushSize * 10}px sans-serif`;
                    ctx.fillStyle = color;
                    ctx.textBaseline = 'top';
                    const lines = textInput.value.split('\n');
                    const lineHeight = brushSize * 12; // slightly larger than font size
                    lines.forEach((line, i) => {
                        ctx.fillText(line, textInput.x + 4, textInput.y + 4 + (i * lineHeight));
                    });
                    ctx.restore();
                    saveSession();
                }
            }
        }
        setTextInput(null);
    };

    const handleTextDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        e.preventDefault(); // Prevent focus loss or other default behaviors
        setIsDraggingText(true);
        
        let clientX, clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = (e as React.MouseEvent).clientX;
            clientY = (e as React.MouseEvent).clientY;
        }

        // Store the initial mouse position
        dragStartRef.current = { x: clientX, y: clientY };
    };

    // Global event listeners for dragging text
    useEffect(() => {
        const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
            if (!isDraggingText || !textInput || !dragStartRef.current) return;

            let clientX, clientY;
            if ('touches' in e) {
                clientX = (e as TouchEvent).touches[0].clientX;
                clientY = (e as TouchEvent).touches[0].clientY;
            } else {
                clientX = (e as MouseEvent).clientX;
                clientY = (e as MouseEvent).clientY;
            }

            const dx = clientX - dragStartRef.current.x;
            const dy = clientY - dragStartRef.current.y;

            setTextInput(prev => prev ? ({
                ...prev,
                x: prev.x + dx,
                y: prev.y + dy
            }) : null);

            dragStartRef.current = { x: clientX, y: clientY };
        };

        const handleGlobalUp = () => {
            if (isDraggingText) {
                setIsDraggingText(false);
                dragStartRef.current = null;
            }
        };

        if (isDraggingText) {
            window.addEventListener('mousemove', handleGlobalMove);
            window.addEventListener('mouseup', handleGlobalUp);
            window.addEventListener('touchmove', handleGlobalMove, { passive: false });
            window.addEventListener('touchend', handleGlobalUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('touchmove', handleGlobalMove);
            window.removeEventListener('touchend', handleGlobalUp);
        };
    }, [isDraggingText, textInput]);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        saveSession();
    };

    const downloadCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = `whiteboard_${sessionId}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-[90vw] h-[80vh] flex flex-col overflow-hidden relative">
                {/* Toolbar */}
                <div className="bg-slate-100 border-b border-slate-200 p-3 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto">
                        <h3 className="font-bold text-slate-700 flex items-center hidden sm:flex">
                            <Pen className="w-4 h-4 mr-2" />
                            Whiteboard
                        </h3>
                        <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>

                        {/* Tools */}
                        <div className="flex items-center space-x-1">
                            <button onClick={() => setTool('pen')} className={`p-2 rounded ${tool === 'pen' ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-200 text-slate-600'}`} title="Pen"><Pen className="w-4 h-4" /></button>
                            <button onClick={() => setTool('eraser')} className={`p-2 rounded ${tool === 'eraser' ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-200 text-slate-600'}`} title="Eraser"><Eraser className="w-4 h-4" /></button>
                            <button onClick={() => setTool('rect')} className={`p-2 rounded ${tool === 'rect' ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-200 text-slate-600'}`} title="Rectangle"><Square className="w-4 h-4" /></button>
                            <button onClick={() => setTool('circle')} className={`p-2 rounded ${tool === 'circle' ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-200 text-slate-600'}`} title="Circle"><Circle className="w-4 h-4" /></button>
                            <button onClick={() => setTool('text')} className={`p-2 rounded ${tool === 'text' ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-200 text-slate-600'}`} title="Text"><Type className="w-4 h-4" /></button>
                        </div>

                        <div className="h-6 w-px bg-slate-300"></div>

                        {/* Colors */}
                        <div className="flex items-center space-x-1">
                            {['#000000', '#ef4444', '#22c55e', '#3b82f6', '#f59e0b'].map(c => (
                                <button
                                    key={c}
                                    onClick={() => { setColor(c); if (tool === 'eraser') setTool('pen'); }}
                                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 ${color === c && tool !== 'eraser' ? 'border-slate-900 scale-110' : 'border-transparent hover:scale-110'}`}
                                    style={{ backgroundColor: c }}
                                />
                            ))}
                        </div>

                        {/* Brush Size */}
                        <input
                            type="range"
                            min="1"
                            max="20"
                            value={brushSize}
                            onChange={(e) => setBrushSize(Number(e.target.value))}
                            className="w-20 h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
                            title="Brush Size"
                        />

                        <div className="h-6 w-px bg-slate-300"></div>

                        {/* Actions */}
                        <div className="flex items-center space-x-1">
                            <button onClick={clearCanvas} className="p-2 hover:bg-red-100 text-slate-600 hover:text-red-600 rounded" title="Clear"><Trash2 className="w-4 h-4" /></button>
                            <button onClick={downloadCanvas} className="p-2 hover:bg-slate-200 text-slate-600 rounded" title="Download"><Download className="w-4 h-4" /></button>
                        </div>
                    </div>

                    <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full text-slate-500">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Canvas Area */}
                <div className="flex-1 bg-white cursor-crosshair relative touch-none overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                        className="absolute inset-0 w-full h-full"
                    />

                    {/* Text Input Overlay */}
                    {textInput && (
                        <div
                            style={{
                                position: 'absolute',
                                left: textInput.x,
                                top: textInput.y,
                                zIndex: 10,
                                cursor: isDraggingText ? 'grabbing' : 'grab'
                            }}
                            onMouseDown={handleTextDragStart}
                            onTouchStart={handleTextDragStart}
                        >
                            <textarea
                                ref={textInputRef}
                                value={textInput.value}
                                onChange={(e) => setTextInput({ ...textInput, value: e.target.value })}
                                onBlur={() => {
                                    // Optional: auto-save on blur if not dragging
                                    // if (!isDraggingText) handleTextSubmit();
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleTextSubmit();
                                    }
                                    if (e.key === 'Escape') setTextInput(null);
                                }}
                                style={{
                                    color: color,
                                    fontSize: `${brushSize * 10}px`,
                                    lineHeight: '1.2',
                                    minWidth: '150px',
                                    minHeight: '50px',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    border: '2px dashed #3b82f6',
                                    borderRadius: '4px',
                                    padding: '4px',
                                    outline: 'none',
                                    resize: 'both',
                                    overflow: 'hidden'
                                }}
                                className="shadow-lg"
                                placeholder="Type here... (Drag to move)"
                                autoFocus
                            />
                            <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded rounded-b-none cursor-grab">
                                Drag me
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
