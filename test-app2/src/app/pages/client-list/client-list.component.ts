import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ClientListService} from "../../services/client-list.service";
import {AddCustomerComponent} from "../add-customer/add-customer.component";
import { MatDialog } from '@angular/material/dialog';
import { ClientDisplay } from 'src/app/model/ClientDisplay';
import {ClientToSave} from "../../model/ClientToSave";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})

export class ClientListComponent implements OnInit {
  constructor(
    public listService: ClientListService,
    public dialog: MatDialog,
  ) {
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  filterName: string;
  displayedColumns: string[] = ['id', 'fio', 'age', 'character', 'totalBalanceOfAccounts', 'maximumBalance', 'minimumBalance', 'action'];

  dataSource = new MatTableDataSource();

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.listService.loadRecords();
  }

  myFunk($event: PageEvent) {
    console.log($event)
  }

  applyFilter() {
    console.log(this.filterName);
  }

  myFunk1($event: any) {
    console.log($event);
  }

  openModal(element): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '700px',
      height: '700px',
      data: element
    });

    dialogRef.afterClosed().subscribe(
      (res:ClientDisplay) => {
        if (res.fio!=null) {
            this.dataSource.data.unshift(res);
            this.dataSource.data = [...this.dataSource.data];
        } else {
          return;
        }
      })
  }

  openDialogDelete(element: any) {
    this.dataSource.data = this.dataSource.data.filter((value:any) => value.id!=element.id);
  }

  openDialogUpdate(element: ClientDisplay) {
    this.openModal(element.clientToSave);
  }
}
