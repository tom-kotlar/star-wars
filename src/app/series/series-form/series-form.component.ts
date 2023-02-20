import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Serie } from '../serie.model';

@Component({
  selector: 'series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.scss']
})
export class SeriesFormComponent {
  @Input() serie!: Serie;

  @Output() create = new EventEmitter<Serie>();
  @Output() update = new EventEmitter<Serie>();
  @Output() delete = new EventEmitter<Serie>();

  id = Math.floor(Math.random() * 50) + 3

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({ id: this.serie.id, ...form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleDelete() {
    if (confirm(`Really delete ${this.serie.title}?`)) {
      this.delete.emit({ ...this.serie });
    }
  }
}
