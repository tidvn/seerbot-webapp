import { cn } from '@/utils';
import { Loader2 } from 'lucide-react';
import React from 'react';


const Loading = () => {
    return (
        <div className="grid h-screen place-content-center px-4" >
            <Loader2
                className={cn('my-28 h-16 w-16 text-primary/60 animate-spin')}
            />
        </div>
    );
};

export default Loading;