import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjectSelectComponent } from '../../../project';
import { CommitSelectComponent } from '../../../commit';
import { BranchSelectComponent } from '../../../branch';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatToolbar, 
    MatIcon, 
    MatMenu, 
    MatDivider, 
    MatSidenav,
    MatNavList,
    MatListItem,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatSidenavContent,
    RouterLink,
    RouterOutlet,
    MatSidenavContainer,
    MatMenuTrigger,
    ProjectSelectComponent,
    CommitSelectComponent,
    BranchSelectComponent,
    
   ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  
  title='ECR';

}
