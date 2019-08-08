import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { AlbumInputComponent } from './album-input.component';
import { PhotoApiService } from '../photo-api.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('AlbumInputComponent', () => {
  let component: AlbumInputComponent;
  let service: PhotoApiService;
  let fixture: ComponentFixture<AlbumInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumInputComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

