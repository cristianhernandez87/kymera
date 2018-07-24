# silc grid [![npm version](https://badge.fury.io/js/silc-grid.svg)](https://badge.fury.io/js/silc-grid)
The grid module is a lightweight, flexbox-based grid system for the [silc framework](https://github.com/nickrigby/silc). The grid uses responsive classes, that can be generated from any number of custom breakpoints.

## HTML
```html
<div class="silc-grid">
    <div class="silc-grid__col silc-grid__col--6-large">6</div>
    <div class="silc-grid__col silc-grid__col--6-large">6</div>
</div>

<div class="silc-grid">
    <div class="silc-grid__col silc-grid__col--4-large">4</div>
    <div class="silc-grid__col silc-grid__col--4-large">4</div>
    <div class="silc-grid__col silc-grid__col--4-large">4</div>
</div>

<div class="silc-grid">
    <div class="silc-grid__col silc-grid__col--6-medium silc-grid__col--3-large">3</div>
    <div class="silc-grid__col silc-grid__col--6-medium silc-grid__col--3-large">3</div>
    <div class="silc-grid__col silc-grid__col--6-medium silc-grid__col--3-large">3</div>
    <div class="silc-grid__col silc-grid__col--6-medium silc-grid__col--3-large">3</div>
</div>
```

## Class modifiers

### Column widths
Column widths can be changed on a per-breakpoint basis using the `silc-grid__col--{columns}-{breakpoint}` modifier class.

```html
<div class="silc-grid">
    <div class="silc-grid__col silc-grid__col--6-small silc-grid__col--3-medium">
    ...
    </div>
    <div class="silc-grid__col silc-grid__col--6-small silc-grid__col--3-medium">
    ...
    </div>
    <div class="silc-grid__col silc-grid__col--6-small silc-grid__col--3-medium">
    ...
    </div>
    <div class="silc-grid__col silc-grid__col--6-small silc-grid__col--3-medium">
    ...
    </div>
</div>
```

#### Auto column width
A column width can also be set to "auto", where it's width is not explicitly set. Auto widths can be applied across all breakpoints using `silc-grid__col--auto` or at specific breakpoints using `silc-grid__col--auto-{breakpoint}`.

### No gutters
By default, silc grids have gutters, which are specified using the `$silc-grid--gutter` variable. However, using the `silc-grid--no-gutters` modifier class, you can specify individual grids to have no gutters.

```html
<div class="silc-grid silc-grid--no-gutters">
...
</div>
```

#### Collapse
It is also possible to remove the bottom margin from grid columns using the `silc-grid--collapse` modifier.

```html
<div class="silc-grid silc-grid--collapse">
...
</div>
```

__Note:__ To set all grids to have no gutters by default, simply set the `$silc-grid--gutter` variable to `0`.

###  Justify content
Justify the alignment of grid columns using the `silc-grid--justify-{alignment}` modifier class. This can be specified globally (for all breakpoints), or on a per-breakpoint case using `silc-grid--justify-{alignment}-{breakpoint}`.

#### Justify left (default)
```html
<div class="silc-grid silc-grid--justify-left">
...
</div>
<div class="silc-grid silc-grid--justify-left-large">
...
</div>
```

#### Justify right
```html
<div class="silc-grid silc-grid--justify-right">
...
</div>
<div class="silc-grid silc-grid--justify-right-medium">
...
</div>
```

#### Justify center
```html
<div class="silc-grid silc-grid--justify-center">
...
</div>
<div class="silc-grid silc-grid--justify-center-small">
...
</div>
```

#### Justify between
Uses flexbox `space-between` to justify content. Great for two column rows where one row is flush left, and the other is flush right.
```html
<div class="silc-grid silc-grid--justify-between">
...
</div>
<div class="silc-grid silc-grid--justify-between-small">
...
</div>
```

### Align content
Vertically align columns in the grid using the `silc-grid--align-{alignment}` modifier class. This can be specified globally (for all breakpoints), or on a per-breakpoint case using `silc-grid--align-{alignment}-{breakpoint}`.

#### Align top (default)
```html
<div class="silc-grid silc-grid--align-top">
...
</div>
<div class="silc-grid silc-grid--align-top-large">
...
</div>
```

#### Align bottom
```html
<div class="silc-grid silc-grid--align-bottom">
...
</div>
<div class="silc-grid silc-grid--align-bottom-medium">
...
</div>
```

#### Align center
```html
<div class="silc-grid silc-grid--align-center">
...
</div>
<div class="silc-grid silc-grid--align-center-small">
...
</div>
```

### Reverse columns
Reverse the order of columns using the `silc-grid--reverse` modifier class. This can be specified globally (for all breakpoints), or on a per-breakpoint case using `silc-grid--reverse-{breakpoint}`.

```html
<div class="silc-grid silc-grid--reverse">
...
</div>
<div class="silc-grid silc-grid--reverse-small">
...
</div>
```

## Variables
A number of variables are available for modifiying the default structure of the grid. [View full list of variables](src/scss/_variables.scss). Override the default variables by declaring them in your own SASS import file, which should be included after the silc-grid import.
