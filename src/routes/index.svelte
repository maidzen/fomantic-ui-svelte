<script lang="ts">
    import Button from '../lib/Elements/Button.svelte'
</script>
<div class="wrapper">
    <div class="box">
        <h1>Buttons</h1>
        <h2>Color</h2>
        <Button>Default</Button>
        <Button is="red">Red</Button>
        <h2>size</h2>
        <Button is="mini">Mini</Button>
        <Button is="tiny">Tiny</Button>
        <Button is="small">Small</Button>
        <Button is="medium">Medium</Button>
        <Button is="large">Large</Button>
        <Button is="big">Big</Button>
        <Button is="huge">Huge</Button>
        <Button is="massive">Massive</Button>
    </div>
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        padding: 1em;
    }
    .box {
        padding: 2em;
        margin: 2em;
        box-shadow: $box-shadow-out;
        border: $border;
        border-radius: $border-radius;
    }
</style>