<template>
  <div ref="paypal"></div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        price: 0.01,
        description: "Hello",
      },
    };
  },

  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AYZ0o5Co5ohn77T43iBDZSDjBcvYbE0hHJo18Rv8MAwOrCjnfE8rg-Qho2QICCfGQceBP7FF5SntunqK";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },

  methods: {
    setLoaded() {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
  },
};
</script>

<style>
</style>