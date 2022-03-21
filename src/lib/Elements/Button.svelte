<script>
    export let is = "";
</script>

<button class={is}><slot /></button>


<style lang="scss">
    button {
        cursor: pointer;
        border-radius: $border-radius;
        background-color: $secondary;
        color: $font-color-light;
        border: none;
        box-shadow: $box-shadow;
        min-height: 1em;
        text-align: center;
        font-weight: 700;
        padding: 0.7em 1.5em;
    }
    button:hover {
        background-color: $grey-hover;
        color: $font-color;
    }


    button.red {
        background-color: $red;
        color: $font-color-inverted;
    }

    button.red:hover {
        background-color: $red-hover;
    }

    button.mini {
        font-size: calc($font-size / 1.3);
    }
    button.tiny {
        font-size: calc($font-size / 1.2);
    }
    button.small {
        font-size: calc($font-size / 1.1);
    }
    button.large {
        font-size: calc($font-size / 0.9);
    }
    button.big {
        font-size: calc($font-size / 0.8);
    }

    button.huge {
        font-size: calc($font-size / 0.7);
    }
    button.massive {
        font-size: calc($font-size / 0.6);
    }


</style>