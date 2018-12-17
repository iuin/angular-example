import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode, TreeComponent, ITreeOptions } from "angular-tree-component";
import { RestoreBrowseService } from 'app/business-avamar/backup-restore/restore/restore-browse/restore-browse.service';
@Component({
    selector: 'restore-vm-browse-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss'],
    providers: [RestoreBrowseService]
})
export class ContentTreeComponent implements OnInit {

    @ViewChild('tree') tree: TreeComponent;

    nodes = [];
    options: ITreeOptions = {
        // useVirtualScroll: true,
        nodeHeight: 22,
        dropSlotHeight: 22
    };

    @Output() checkedChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(private service: RestoreBrowseService) { }

    ngOnInit(): void { }

    init(backup: any) {
        let pluginNumber = backup.pluginNumber;
        if ((pluginNumber === 1016 || pluginNumber === 3016)) {
            this.service.getBackupDisk(backup.cid, backup.labelNumber).subscribe(res => {
                this.reset();
                let rootNode = this.createDiskNode();
                for (let content of res) {
                    content.name = content.displayNameForDiskLevel;
                    content.icon = 'hard-disk';
                    content.fileType = 'DISK';
                    content.hasChildren = false;
                    content.protection = 'N/A';
                    content.path = content.displayNameForDiskLevel;
                    content.date = backup.creationTime;
                    content.size = content.capacityInKb;
                    content.checked = false;
                    rootNode.children.push(content);
                }
                this.nodes.push(rootNode);
            });
        } else {
            // this.service.getBackupContent(backup.cid, backup.labelNumber, undefined, this.isFLR).subscribe(res => {
            //     let contents = res.content;
            //     let root = this.createVappNode(this.client.hleName);
            //     root.columns = res.columuns;
            //     for (let content of contents) {
            //         let vmNode = this.createVmNode(content.clientName);
            //         Object.assign(vmNode, {
            //             cid: content.cid,
            //             labelNumber: content.labelNumber,
            //             date: content.date,
            //             size: content.size,
            //             pluginName: content.pluginName,
            //             pluginNumber: content.pluginNumber
            //         });
            //         for (let disk of content.contents) {
            //             let newDisk = {
            //                 name: disk.name,
            //                 fileType: 'DISK',
            //                 icon: 'hard-disk',
            //                 hasChildren: false,
            //                 checked: false
            //             };
            //             vmNode.children.push(newDisk);
            //         }
            //         root.children.push(vmNode);
            //     }
            //     this.nodes.push(root);
            // });
        }
    }

    reload(res: any) {
        this.reset();
        let rootNode = Object.assign({ columns: res.columns}, this.createFolderNode());
        for (let content of res.content) {
            if (content.fileType === 'DIRECTORY') {
                content.icon = "folder";
                content.hasChildren = true;
            } else {
                content.icon = "file";
                content.hasChildren = false;
            }
            rootNode.children.push(content);
        }
        this.nodes.push(rootNode);
    }

    createDiskNode(): any {
        return {
            fileType: "DIRECTORY",
            name: "Disks",
            icon: "folder",
            hasChildren: true,
            checked: false,
            children: [],
            columns: []
        };
    }

    createFolderNode(name = '') {
        return {
            fileType: "DIRECTORY",
            name: name,
            path: "",
            icon: "folder",
            unicode: true,
            hasChildren: true,
            checked: false,
            children: [],
            columns: []
        };
    }

    createVappNode(name = '') {
        return {
            fileType: "VirtualApp",
            name: name,
            icon: "vmw-app",
            hasChildren: true,
            checked: false,
            children: [],
            columns: []
        };
    }

    createVmNode(name = '') {
        return {
            fileType: "VirtualMachine",
            name: name,
            icon: "vm",
            hasChildren: true,
            checked: false,
            children: [],
            columns: []
        };
    }

    updateChecked(change: Array<any> | boolean) {
        if (change instanceof Array) {
            change.forEach(e => {
                let node = this.tree.treeModel.getNodeById(e.id)
                this.updateChildNodesCheckBox(node, e.checked);
                this.updateParentNodesCheckBox(node.parent);
            });
        }
    }

    reset() {
        this.nodes = [];
        this.checkedChange.emit({ datas: [], columns: [] });
    }

    public check(node, $event) {
        this.updateChildNodesCheckBox(node, $event.target.checked);
        this.updateParentNodesCheckBox(node.parent);
        this.checkedChange.emit({ datas: node.data.children, columns: node.columns });
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
