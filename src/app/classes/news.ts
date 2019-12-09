export class News {
  title: string;
  publishDate: string;
  content: string;
  image: string;
  Title: string;

  constructor(title: string, publishDate: string, content: string, image: string, Title: string) {
    this.title = title;
    this.publishDate = publishDate;
    this.content = content;
    this.image = image;
    this.Title = Title;
  }
}
