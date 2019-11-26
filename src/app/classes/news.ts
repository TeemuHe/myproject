export class News {
  title: string;
  publishDate: string;
  content: string;
  image: string;

  constructor(title: string, publishDate: string, content: string, image: string) {
    this.title = title;
    this.publishDate = publishDate;
    this.content = content;
    this.image = image;
  }
}
