
export type TodoDto = {
    id: number;
    title: string;
    completed: boolean;
}

export async function fetchTodos(): Promise<TodoDto[]> {
    await new Promise(resolve => setTimeout(resolve, 2500));
    return [
        { id: 1, title: 'Buy milk', completed: false },
        { id: 2, title: 'Buy bread', completed: true },
        { id: 3, title: 'Buy eggs', completed: false },
    ];
}