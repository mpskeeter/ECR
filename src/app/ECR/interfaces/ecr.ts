import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Ecr {
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
}

export const ecrData=[
    {
        id:1,
        title:'ECR1',
        changeSeverity:'1',
        changePriority:1,
        requestNumber:1,
        requestCode:1,
        description:'hello hello hello hello hello hello hi hih ihih icre',
        solutionRequirements:'',
        creator:'',
        createdDate:'07/17/2024',
        signature:'',
        documents:'',
    }
];

export const ecrForm = (fb:FormBuilder, ecr?:Ecr) => fb.group({
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
  });
