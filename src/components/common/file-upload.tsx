'use client';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import { IMG_MAX_LIMIT } from '../app/old/forms/product-form';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

interface ImageUploadProps {
  onChange?: any;
  onRemove: (data: any) => void;
  value: any;
}

export default function FileUpload({
  onChange,
  onRemove,
  value
}: ImageUploadProps) {
  const { toast } = useToast();
  const onDeleteFile = (key: string) => {
    const files = value;
    let filteredFiles = files.filter((item: any) => item.key !== key);
    onRemove(filteredFiles);
  };
  const onUpdateFile = (newFiles: any) => {
    onChange([...value, ...newFiles]);
  };
  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {!!value.length &&
          value?.map((item: any) => (
            <div
              key={item.key}
              className="relative h-[200px] w-[200px] overflow-hidden rounded-md"
            >
              <div className="absolute right-2 top-2 z-10">
                <Button
                  type="button"
                  onClick={() => onDeleteFile(item.key)}
                  variant="destructive"
                  size="sm"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Image
                  fill
                  className="object-cover"
                  alt="Image"
                  src={item.fileUrl || ''}
                />
              </div>
            </div>
          ))}
      </div>
      <div>
        {value.length < IMG_MAX_LIMIT && (
          <div className="ut-label:text-sm ut-allowed-content:ut-uploading:text-red-300 py-2 dark:bg-zinc-800" />
        )}
      </div>
    </div>
  );
}
