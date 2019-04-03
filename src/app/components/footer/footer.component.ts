import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-footer",
  template: `
  <footer class="page-footer font-small bg-primary">  
    <div id="footer-text" class="footer-copyright text-center py-3">© {{year}} Copyright: Nour Kilany
    </div>
  </footer>`,
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  constructor() {}

  ngOnInit() {}
}
