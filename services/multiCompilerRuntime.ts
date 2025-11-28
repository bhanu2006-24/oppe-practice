import { ExecutionStatus } from '../types';

const PISTON_API_URL = 'https://emkc.org/api/v2/piston';

export interface PistonRuntime {
    language: string;
    version: string;
    aliases: string[];
}

export interface PistonExecuteResponse {
    run: {
        stdout: string;
        stderr: string;
        code: number;
        signal: string | null;
        output: string;
    };
    language: string;
    version: string;
}

// Map our internal language IDs to Piston's expected format
const LANGUAGE_MAP: Record<string, { language: string, version: string }> = {
    'python': { language: 'python', version: '3.10.0' },
    'javascript': { language: 'javascript', version: '18.15.0' },
    'typescript': { language: 'typescript', version: '5.0.3' },
    'java': { language: 'java', version: '15.0.2' },
    'c++': { language: 'c++', version: '10.2.0' },
    'go': { language: 'go', version: '1.16.2' },
    'rust': { language: 'rust', version: '1.68.2' },
    'bash': { language: 'bash', version: '5.2.0' },
    'sql': { language: 'sqlite3', version: '3.36.0' },
};

export const getSupportedLanguages = () => Object.keys(LANGUAGE_MAP);

export const executeCode = async (
    language: string,
    code: string,
    stdin: string = ""
): Promise<{ output: string; status: ExecutionStatus }> => {
    const config = LANGUAGE_MAP[language.toLowerCase()];

    if (!config) {
        return {
            output: `Error: Language '${language}' is not supported.`,
            status: ExecutionStatus.ERROR
        };
    }

    try {
        const response = await fetch(`${PISTON_API_URL}/execute`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                language: config.language,
                version: config.version,
                files: [
                    {
                        content: code,
                    },
                ],
                stdin: stdin,
            }),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const result: PistonExecuteResponse = await response.json();

        // Combine stdout and stderr
        const output = result.run.output;
        const status = result.run.code === 0 ? ExecutionStatus.COMPLETED : ExecutionStatus.ERROR;

        return { output, status };

    } catch (error: any) {
        return {
            output: `Execution Error: ${error.message}`,
            status: ExecutionStatus.ERROR
        };
    }
};
