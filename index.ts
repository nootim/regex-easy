module.exports = {

    test: {
        no: {
            /**
             * Test if the value contain something else that a number
             * @param value: value to test
             * @param isGlobal: flag g (default true)
             * @returns: true if there is something else that a number 
             */
            numbers: (value: string, isGlobal: boolean = true): boolean => {
                let regex = isGlobal ? new RegExp('[^0-9]', 'g') : new RegExp('[^0-9]');
                return regex.test(value)
            },

            /**
             * @param value: value to test
             * @param isGlobal: flag g (default true)
             * @param isCaseIgnore: flag i (default true)
             */
            letters: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true): boolean => {
                let regexStr = '[^a-z]'
                let flag = ''
                if (isGlobal) {
                    flag += 'g'
                }
                if (isCaseIgnore) {
                    flag += 'i'
                }
                let regex = new RegExp(regexStr, flag)
                return regex.test(value)
            },

            /**
             * @param value: value to test
             */
            whiteSpace: (value: string): boolean => {
                return /\S/g.test(value)
            }
        },

        /**
        * Test if the string start with the value
        * @param value: value to test
        * @param isGlobal: flag g (default true)
        * @returns: true if string start with value 
        */
        startWithValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = '^' + value
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return regex.test(value)
        },

        /**
        * Test if the string end with the value
        * @param value: value to test
        * @param isGlobal: flag g (default true)
        * @returns: true if string end with value 
        */
        endWithValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = value + '$'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return regex.test(value)
        },

        /**
        * Test if the value is in the string one or more times
        * @param value: value to test
        * @param isGlobal: flag g (default true)
        * @returns: true if value is in string one or more times 
        */
        oneOrMoreValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = value + '+'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return regex.test(value)
        },

        /**
        * Test a part of string "pol", "pow", "pod"
        * @param value: value to test
        * @param isGlobal: flag g (default true)
        * @returns: true if string have an unknow character "tac", "tap" 
        */
        maybeValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = value + '*'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return regex.test(value)
        },

        /**
        * Test if the value is not in the string
        * @param value: value to test
        * @param isGlobal: flag g (default true)
        * @returns: true if value is not in the string 
        */
        excludeValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = `[^ + ${value}]`
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return regex.test(value)
        },

        wildcardAndValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = `.${value}`
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return regex.test(value)
        },

        specialCharacterWithUnderscore: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = '\W'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return regex.test(value)
        },

        whiteSpace: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = '\s'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return regex.test(value)
        }

    },
    match: {
        no: {
            /**
             * Test if a value is a number
             * @param value: value to test
             * @param isGlobal: flag g (default true)
             */
            numbers: (value: string, isGlobal: boolean = true): string[] => {
                let regex = isGlobal ? new RegExp('[^0-9]', 'g') : new RegExp('[^0-9]');
                return value.match(regex)
            },

            /**
             * @param value: value to test
             * @param isGlobal: flag g (default true)
             * @param isCaseIgnore: flag i (default true)
             */
            letters: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true): string[] => {
                let regexStr = '[^a-z]'
                let flag = ''
                if (isGlobal) {
                    flag += 'g'
                }
                if (isCaseIgnore) {
                    flag += 'i'
                }
                let regex = new RegExp(regexStr, flag)
                return value.match(regex)
            },

            /**
             * @param value: value to test
             */
            whiteSpace: (value: string): string[] => {
                return value.match(/\S/g)
            }
        },

        startWithValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = '^' + value
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return regex.test(value)
        },

        endWithValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true): string[] => {
            let regexStr = value + '$'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return value.match(regex)
        },

        oneOrMoreValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = value + '+'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return value.match(regex)
        },

        maybeValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = value + '*'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return value.match(regex)
        },

        excludeValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = `[^ + ${value}]`
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return value.match(regex)
        },

        wildcardAndValue: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = `.${value}`
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return value.match(regex)
        },

        specialCharacterWithUnderscore: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = '\W'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return value.match(regex)
        },

        whiteSpace: (value: string, isGlobal: boolean = true, isCaseIgnore: boolean = true) => {
            let regexStr = '\s'
            let flag = ''
            if (isGlobal) {
                flag += 'g'
            }
            if (isCaseIgnore) {
                flag += 'i'
            }
            let regex = new RegExp(regexStr, flag)
            return value.match(regex)
        }

    }
}
