export class Post {
  [x: string]: any;
  public id: number = 0;
  public topic: string = '';
  public nome: string = 'Vinicius';
  public mensagem: string | string[] = '';
  public likes: number = 0;
  public dislikes: number = 0;
  public likeClicked: boolean = false;
  public dislikeClicked: boolean = false;
}
