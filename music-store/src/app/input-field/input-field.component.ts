import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent implements OnInit {
  search = new FormControl();
  searchSub!: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        switchMap((artistName) => {
          this.router.navigate(['artists'], { relativeTo: this.route });
          if (!artistName) {
            this.router.navigateByUrl('');
            return EMPTY;
          }
          return this.dataStorageService.getArtists(artistName);
        })
      )
      .subscribe(
        () => {},
        (error) => {
          console.log(error.message);
        }
      );
  }
}
