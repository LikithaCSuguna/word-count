import { DocumentStats } from '../types';

export function calculateStats(text: string, readingSpeed: number = 200): DocumentStats {
    if (!text) {
        return {
            wordCount: 0,
            charCount: 0,
            charCountNoSpaces: 0,
            lineCount: 0,
            readingTimeMinutes: 0
        };
    }

    // Split by whitespace to find words
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    const charCount = text.length;
    const charCountNoSpaces = text.replace(/\s/g, '').length;
    
    // Split by newlines
    const lineCount = text.split(/\r\n|\r|\n/).length;

    // Estimate reading time in minutes (words / words_per_minute)
    // Always round up slightly or use 1 if it's very small but has words
    const rawReadingTime = wordCount / readingSpeed;
    const readingTimeMinutes = Math.max(0, Math.ceil(rawReadingTime));

    return {
        wordCount,
        charCount,
        charCountNoSpaces,
        lineCount,
        readingTimeMinutes
    };
}
