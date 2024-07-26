import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ColumnDef } from "../../core/interfaces/column-def";
import { BaseEntity } from "../../core";

export interface Ecr extends BaseEntity{
    id:number;
    title:string;
    changeSeverity:string;
    changePriority:number;
    requestNumber:number;
    requestCode:number;
    description:string;
    solutionRequirements:string;
    creator:string;
    createdDate:string;
    signature:string;
    documents:string;    
    repository:string;
    commits:string[];
}

export const ecrData=[
    {
        id:1,
        title:'ECR1',
        changeSeverity:'1',
        changePriority:1,
        requestNumber:1,
        requestCode:1,
        description:'See individual items from ECR - Evaluation Sheets.',
        solutionRequirements:'',
        creator:'ggg',
        createdDate:'07/17/2024',
        signature:'',
        documents:'',
        repository:'ECR',
        commits:['db5c8ea7d0820193f87c5b985303013bcf07a2ce','bfbef439ec6024c94c1003d26244adc324f81c1a','049e6a9f2a00d0a671b2c0695df95ff15466fd83', '4a317f3a1b888b14c7e3e741ca2c9e22f9b27b9e'],
    },
    {
        id:2,
        title:'ECR2',
        changeSeverity:'1',
        changePriority:1,
        requestNumber:1,
        requestCode:1,
        description:'See individual items from ECR - Evaluation Sheets.',
        solutionRequirements:'',
        creator:'Ethan',
        createdDate:'10/31/2024',
        signature:'',
        documents:'',
        repository:'merge-conf',
        commits:[],
    },
];

export const ecrForm = (fb:FormBuilder, ecr?:Ecr) => fb.group({
    // id: new FormControl(ecr?.id || 0),
    title: new FormControl(ecr?.title || '',[Validators.required]),
    changeSeverity: new FormControl(ecr?.changeSeverity || ''),
    changePriority: new FormControl(ecr?.changePriority || 0),
    requestNumber: new FormControl(ecr?.requestNumber || 0),
    requestCode: new FormControl(ecr?.requestCode || 0),
    description: new FormControl(ecr?.description || ''),
    solutionRequirements: new FormControl(ecr?.solutionRequirements || ''),
    creator: new FormControl(ecr?.creator || '',[Validators.required]),
    createdDate: new FormControl(new Date(ecr?.createdDate || '')),
    signature: new FormControl(ecr?.signature || ''),
    documents: new FormControl(ecr?.documents || ''),
    repository: new FormControl(ecr?.repository || '',[Validators.required]),
    commits: new FormControl(ecr?.commits || []),
  });

  export const EcrTableDef: ColumnDef[] = [
    {
      header: 'ID',
      column: 'id',
      data: (row) => (row as Ecr).id,
    },
    {
      header: 'TITLE',
      column: 'title',
      data: (row) => (row as Ecr).title,
    },
    {
      header: 'DESCRIPTION',
      column: 'description',
      data: (row) => (row as Ecr).description,
    },
    {
      header: 'CREATOR',
      column: 'creator',
      data: (row) => (row as Ecr).creator,
    },
    {
      header: 'CREATED DATE',
      column: 'createdDate',
      data: (row) => (row as Ecr).createdDate || '',
    },
    // {
    //   header: 'COMMITS',
    //   column: 'commits',
    //   data: (row) => (row as Ecr).commits?.join(',') || '',
    // },
  ]
