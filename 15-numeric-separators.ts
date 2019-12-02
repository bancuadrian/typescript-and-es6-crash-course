/**
 * this feature is available from typescript 2.7
 * "_" underscore can be used to format numbers in code to see them better
 * 
 * see the compiled code
 */
let largeNumber = 1287269147;
const largeNumberFormatted = 1_287_269_147;
const anotherExample = 1_2_87_2_69_14_7.234_25_26;

console.log(largeNumber, largeNumberFormatted, largeNumber == largeNumberFormatted);

class AmountInput {
    private static MAX_ALLOWED = 10_999;

    amount: number = 0;

    showTooltip() {
        // show a tooltip
        setTimeout(() => {
            // hide after 2.5 seconds
        }, 2_500);
    }

    // divide a number by 1 million and return the result like 1M
    formatMillion() {
        return this.amount / 1_000_000 + "M";
    }
}