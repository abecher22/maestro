import {Component, View} from 'angular2/core';
import {AddNoteTab} from '../add-note-tab/add-note-tab.component';
import {EditNoteTab} from '../edit-note-tab/edit-note-tab.component';
import {EditStaveTab} from '../edit-stave-tab/edit-stave-tab.component';
import {TabsManagerService} from '../../services/tabs-manager.service';
import './stave-action-tabs.style.scss';

@Component({
  selector: 'stave-action-tabs',
  providers: [TabsManagerService]
})
@View({
  directives: [AddNoteTab, EditNoteTab, EditStaveTab],
  templateUrl: 'app/components/stave-action-tabs/stave-action-tabs.template.html'
})
export class StaveActionTabs {
  addNoteTabActive: boolean;
  editNoteTabActive: boolean;
  editStaveTabActive: boolean;
  tabsManager: TabsManagerService;

  constructor(tabsManager: TabsManagerService) {
    this.addNoteTabActive = true;
    this.editNoteTabActive = false;
    this.editStaveTabActive = false;
    this.tabsManager = tabsManager;
  }

  showAddNoteTab() {
    this.tabsManager.selectTab(AddNoteTab);
  };

  showEditNoteTab() {
    this.tabsManager.selectTab(EditNoteTab);
  };

  showEditStaveTab() {
    this.tabsManager.selectTab(EditStaveTab);
  };

  deselectTabs() {
    this.tabsManager.deselectTabs();
  };
};
