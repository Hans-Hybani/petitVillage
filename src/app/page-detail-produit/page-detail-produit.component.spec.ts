import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailProduitComponent } from './page-detail-produit.component';

describe('PageDetailProduitComponent', () => {
  let component: PageDetailProduitComponent;
  let fixture: ComponentFixture<PageDetailProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetailProduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDetailProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
