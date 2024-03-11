
export function removeAt<T>(source: T[], index: number): T[] {
    return [
        ...source.slice(0, index), 
        ...source.slice(index + 1)
    ]
}