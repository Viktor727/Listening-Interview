import { useEffect, useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import Checkbox from './viktor/checkbox';
import { fetchTodos } from '@/lib/api-service';
import { TodoDto } from '@/lib/api-service';
import { Skeleton } from './ui/skeleton';

export function HomePage() {
    const [data, setData] = useState<TodoDto[] | boolean>(false);
    
    useEffect(() => {
        const promise1 = fetchTodos();
        void promise1.then((value) => {
            console.log(value);
            if(value){
                setData(value);
            }
        });

        promise1.catch((error) => {
            console.error(error);
        });
        
    }, [])

    return (
        <ScrollArea className="grow ">
            <div className="flex flex-col space-y-5 p-4">
                {data === false ? (
                    <>
                        <Skeleton className="w-full h-10" />
                        <Skeleton className="w-full h-10" />
                        <Skeleton className="w-full h-10" />
                    </>
                ) : (
                    data !== true && 
                    data.map((item: TodoDto, key: number) => (
                        <Checkbox
                            text={item.title}
                            id={`${item.title}-${item.id}`}
                            checked={item.completed}
                            key={key}
                        />
                    ))
                )}
            </div>
        </ScrollArea>
    );
}
