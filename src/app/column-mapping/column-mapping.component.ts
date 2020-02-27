import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { FormControl } from '@angular/forms';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Table 1',
    children: [
      {name: 'Column 1'},
      {name: 'Column 2'},
      {name: 'Column 3'},
    ]
  },
  {
    name: 'Table 2',
    children: [
      {name: 'Column 4'},
      {name: 'Column 5'},
      {name: 'Column 6'},
    ]
  },
  {
    name: 'Table 3',
    children: [
      {name: 'Column 7'},
      {name: 'Column 8'},
      {name: 'Column 9'},
    ]
  },
  {
    name: 'Table 4',
    children: [
      {name: 'Column 10'},
      {name: 'Column 11'},
      {name: 'Column 12'},
    ]
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-column-mapping',
  templateUrl: './column-mapping.component.html',
  styleUrls: ['./column-mapping.component.css']
})
export class ColumnMappingComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Format 1 | DD-MM-YY', 'Date Format 2 | DD-MM-YYYY', 'Date Format 3 | MM-YY','Date Format 4 | YYYY'];


  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }


  ngOnInit(): void {
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
