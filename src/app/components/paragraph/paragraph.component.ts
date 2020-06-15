import { Component, Input } from '@angular/core';

import { Paragraph } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditionlevelSusceptible, Highlightable } from '../components-mixins';

export interface ParagraphComponent extends EditionlevelSusceptible, Highlightable { }

@Component({
  selector: 'evt-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
})

@register(Paragraph)
export class ParagraphComponent {
  @Input() data: Paragraph;
}