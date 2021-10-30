const LipaNaMpesa = () => {
    return (
        <section>
            <form>
            <div>
              <div>
                <input
                  type="number"
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <input
                  type="number"
                  required
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                />
              </div>
            </div>
            <div>
                <button>
                    Back
                </button>
                <button>Pay</button>
            </div>
          </form>
        </section>
    )
};

export default LipaNaMpesa