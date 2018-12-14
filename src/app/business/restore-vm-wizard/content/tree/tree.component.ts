import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode, TreeComponent, ITreeOptions } from "angular-tree-component";

@Component({
    selector: 'restore-vm-browse-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class ContentTreeComponent implements OnInit {

    @ViewChild('tree') tree: TreeComponent;

    nodes = [
        {
            id: 1,
            name: 'root1',
            children: [
                { id: 2, name: 'child1' },
                { id: 3, name: 'child2' }
            ]
        },
        {
            id: 4,
            name: 'root2',
            children: [
                { id: 5, name: 'child2.1' },
                {
                    id: 6,
                    name: 'child2.2',
                    children: [
                        { id: 7, name: 'subsub' }
                    ]
                },
                { id: 8, name: 'child2.1' },
                {
                    id: 9,
                    name: 'child2.2',
                    children: [
                        { id: 10, name: 'subsub' }
                    ]
                }
            ]
        }
    ];
    options: ITreeOptions = { };

    @Output() checkedChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void { }

    updateChecked(change: Array<any> | boolean) {
        if (change instanceof Array) {
            change.forEach(e => {
                let node = this.tree.treeModel.getNodeById(e.id)
                this.updateChildNodesCheckBox(node, e.checked);
                this.updateParentNodesCheckBox(node.parent);
            });
        }
    }

    public check(node, $event) {
        this.updateChildNodesCheckBox(node, $event.target.checked);
        this.updateParentNodesCheckBox(node.parent);
        this.checkedChange.emit({datas: node.data.children, columns: []});
    }

    public updateChildNodesCheckBox(node, checked) {
        node.data.checked = checked;
        if (node.children) {
            node.children.forEach((child) => this.updateChildNodesCheckBox(child, checked));
        }
    }

    public updateParentNodesCheckBox(node) {
        if (node && node.level > 0 && node.children) {
            let allChildChecked = true;
            let noChildChecked = true;

            for (let child of node.children) {
                if (!child.data.checked) {
                    allChildChecked = false;
                } else if (child.data.checked) {
                    noChildChecked = false;
                }
            }
            if (allChildChecked) {
                node.data.checked = true;
                node.data.indeterminate = false;
            } else if (noChildChecked) {
                node.data.checked = false;
                node.data.indeterminate = false;
            } else {
                node.data.checked = true;
                node.data.indeterminate = true;
            }
            this.updateParentNodesCheckBox(node.parent);
        }
    }
}
