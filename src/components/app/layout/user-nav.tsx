import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
// import { useTelegram } from '@/hooks/useTelegram';
// import { isNil } from 'lodash';
export function UserNav() {
  // const { user } = useTelegram();
  // if (!isNil(user)) {
    return (
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={`https://asa-list.tinyman.org/assets/0/icon.png`}
            alt={"tidvn"}
          />
          <AvatarFallback>{"tidvn"}</AvatarFallback>
        </Avatar>
      </Button>
    );
  }
// }
