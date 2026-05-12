export interface DocumentStats {
    wordCount: number;
    charCount: number;
    charCountNoSpaces: number;
    lineCount: number;
    readingTimeMinutes: number;
}

export interface CounterConfiguration {
    enableLiveCount: boolean;
    readingSpeed: number;
    showStatusBar: boolean;
}
