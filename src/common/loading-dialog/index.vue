  <template>
  <div class="loading-container-monitor" v-if="visible">
    <div class="loading fadeIn animated">
      <div class="spinner spinner-ios">
        <svg viewBox="0 0 64 64">
          <g stroke-width="4" stroke-linecap="round">
            <line y1="17" y2="29" transform="translate(32,32) rotate(180)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(210)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(240)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(270)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(300)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(330)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(0)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(30)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(60)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(90)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(120)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85"
                repeatCount="indefinite"
              />
            </line>
            <line y1="17" y2="29" transform="translate(32,32) rotate(150)">
              <animate
                attributeName="stroke-opacity"
                dur="750ms"
                values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
                repeatCount="indefinite"
              />
            </line>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'

function preventDefault(e: Event) {
  e.preventDefault();
}

let visible = ref(false)

function show() {
  visible.value = true;
  document.body.addEventListener("touchmove", preventDefault);
}
function hide() {
  visible.value = false;
  document.body.removeEventListener("touchmove", preventDefault);
}

defineExpose({
  show,
  hide
})
</script>

<style lang="less" scoped>
.loading-container-monitor {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  transform: translate3d(0, 0, 0.01rem);
  text-align: center;
  .loading {
    padding: 0.8em 1em;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 3px;
  }

  .spinner {
    display: flex;
    justify-content: center;
    padding-bottom: 3px;
  }
  .spinner svg {
    width: 28px;
    height: 28px;
    stroke: #000;
    fill: #000;
  }

  .tips {
    font-size: 14px;
    color: white;
    text-align: center;
    word-break: break-all;
    display: inline-block;
    max-width: 70vh;
  }
  .animated {
    animation-duration: 0.4s;
  }
  .animated.fadeIn {
    animation-name: fadeIn;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>