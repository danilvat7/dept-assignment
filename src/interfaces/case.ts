export interface ICase {
  name?: string;
  description?: string;
  image?: string | null;
  category?: string;
  industry?: string;
  group?: ICase[];
}
