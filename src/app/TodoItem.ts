export class TodoItem{
    title:string="";
    desc:string="";
    completed:boolean=false;
    constructor(title:string,desc:string){
        this.title=title;
        this.desc=desc;
    }
}