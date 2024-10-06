const isReady = shallowRef(false);

function setReady() {
  isReady.value = true;
}

export { isReady, setReady };
