export interface Link {
  id: string;
  userId: string | undefined;
  title: string;
  link: string;
  thumbnailUrl: string;
  isActive: boolean;
}
