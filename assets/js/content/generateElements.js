import { orders } from "../database/order.js"
import { render } from "./renders.js"
import { buttonCancelEvent } from "../events/onmodalEvents.js"

const generate = {}

// Função que Levanta o Modal
generate.generateModal = () => {
  const modalArea = document.querySelector(".modalArea")
  modalArea.innerHTML = render.dishesInfoIntoModal(orders.getOrderData())
  buttonCancelEvent()
}

export { generate }