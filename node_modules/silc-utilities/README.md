# silc utilites [![npm version](https://badge.fury.io/js/silc-utilities.svg)](https://badge.fury.io/js/silc-utilities)
The utilities module is a small web component for the [silc framework](https://silc.io).

## Display
Display elements, globally, or at specific breakpoints.

```html
<div class="silc-display">
    <p>Display block at all screen sizes</p>
</div>
```

### Modifiers
Elements can be displayed at specific breakpoints using modifier classes in the `silc-display--{display-type}-{breakpoint}` format e.g.
```html
<div class="silc-display--none">
    <p>Display none at all screen sizes</p>
</div>
<div class="silc-display--inline-small">
    <p>Display inline at small screen sizes and above</p>
</div>
```

### Variables
Display types can be configured via the `$silc-utilities--display-types` variable. By default, the following display types are defined:

```scss
$silc-utilities--display-types: (
    'block',
    'inline',
    'inline-block',
    'flex',
    'none'
) !default;
```

## Text alignment
Align text, globally, or at specific breakpoints

```html
<div class="silc-align">
    <p>Align initial (left) at all screen sizes</p>
</div>
```

### Modifiers
Text can be aligned at specific breakpoints using modifier classes in the `silc-align--{alignment-type}-{breakpoint}` format e.g.
```html
<div class="silc-align--right">
    <p>Align right at all screen sizes</p>
</div>
<div class="silc-align--center-small">
    <p>Align center at small screen sizes and above</p>
</div>
```

### Variables
Display types can be configured via the `$silc-utilities--display-types` variable. By default, the following display types are defined:

```scss
$silc-utilities--alignment-types: (
    'left',
    'right',
    'center',
    'justify'
) !default;
```

## Margin
Add margin globally, to specific sides, and at specific breakpoints

```html
<div class="silc-m--1 silc-mtop--2 silc-mtop--4-large">

</div>
```

### Variables
Margin types can be configured via the `$silc-utilities--margin-types` variable. By default, the following margin types are defined:

```scss
$silc-utilities--margin-types: (
    'top',
    'right',
    'bottom',
    'left'
) !default;
```

Margin sizes can be configured via the `$silc-utilities--margin` variable. By default, the following margin sizes are defined:

```scss
$silc-utilities--margin: (
    ('0', '0'),
    ('auto', 'auto'),
    ('1', '.25rem'),
    ('2', '.5rem'),
    ('3', '.75rem'),
    ('4', '1rem')
) !default;
```

## Padding
Add padding globally, to specific sides, and at specific breakpoints

```html
<div class="silc-p--1 silc-ptop--2 silc-ptop--4-large">

</div>
```

### Variables
Padding types can be configured via the `$silc-utilities--padding-types` variable. By default, the following padding types are defined:

```scss
$silc-utilities--padding-types: (
    'top',
    'right',
    'bottom',
    'left'
) !default;
```

Padding sizes can be configured via the `$silc-utilities--padding` variable. By default, the following padding sizes are defined:

```scss
$silc-utilities--padding: (
    ('0', '0'),
    ('1', '.25rem'),
    ('2', '.5rem'),
    ('3', '.75rem'),
    ('4', '1rem')
) !default;
```

## Colors
Add color and background color

```html
<div class="silc-color--primary silc-bg--secondary">

</div>
```

### Variables
Color and background colors can be configured via the `$silc-utilities--colors` variable. By default, the following colors are defined:

```scss
$silc-utilities--colors: (
    ('primary', '#369'),
    ('secondary', '#4E7DAB'),
    ('tertiary', '#7BA3CA'),
    ('white', '#fff'),
    ('black', '#000')
) !default;
```

