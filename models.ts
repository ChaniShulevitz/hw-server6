export interface Task{
id?:string;
title:string;
doDate:Date;//תאריך יעד
status?:Status;
timeoutld?:Number;

}
export enum Status{
    pending,
    completed,
    overdue
}