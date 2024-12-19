import { Component, OnInit } from '@angular/core';
import { getAllDb, getDatabase, initializeDatabase, saveNewDb } from '../../core/db';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-version-control',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './version-control.component.html',
  styleUrl: './version-control.component.scss',
})
export class VersionControlComponent implements OnInit {
  dataehsan:any
  data: any;
  dbName: string = '';
  async ngOnInit() {
    initializeDatabase();
    const fetchfromDb = await getAllDb()
    this.dataehsan = fetchfromDb.map((item:string) =>{
      const newName = item.toString().split('-');
      return {
        item:item,
        name: newName[0],
        date: newName[1] ? (new Date(+newName[1])).toLocaleDateString('fa-IR', {hour: '2-digit', minute: '2-digit'}) : 'فاقد تاریخ',
      }
    })
  }
  async saveDb() {
    const key = localStorage.getItem('key')
    console.log(key);
    const fetchfromDb = await getDatabase(key);
    console.log(fetchfromDb);
    this.data = fetchfromDb;
    const dataKey = this.dbName + '-' + (new Date()).getTime()
    console.log(this.data);
    saveNewDb(this.data ,dataKey)
  }
  restoreDb(event:any){
    
    localStorage.setItem('key',event.item)
    
    
  }
}
