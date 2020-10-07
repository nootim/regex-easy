module.exports = {
    test: {
        no: {
            /**
             * Test if a value is a number
             * @param value: value to test
             * @param isGlobal: flag g (default true)
             */
            numbers: function (value, isGlobal) {
                if (isGlobal === void 0) { isGlobal = true; }
                var regex = isGlobal ? new RegExp('[^0-9]', 'g') : new RegExp('[^0-9]');
                return regex.test(value);
            },
            /**
             * @param value: value to test
             * @param isGlobal: flag g (default true)
             * @param isCaseIgnore: flag i (default true)
             */
            letters: function (value, isGlobal, isCaseIgnore) {
                if (isGlobal === void 0) { isGlobal = true; }
                if (isCaseIgnore === void 0) { isCaseIgnore = true; }
                var regexStr = '[^a-z]';
                var flag = '';
                if (isGlobal) {
                    flag += 'g';
                }
                if (isCaseIgnore) {
                    flag += 'i';
                }
                var regex = new RegExp(regexStr, flag);
                return regex.test(value);
            },
            /**
             * @param value: value to test
             */
            whiteSpace: function (value) {
                return /\S/g.test(value);
            }
        },
        /**
         *
         */
        startWithValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = '^' + value;
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return regex.test(value);
        },
        /**
         *
         */
        endWithValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = value + '$';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return regex.test(value);
        },
        /**
         *
         */
        oneOrMoreValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = value + '+';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return regex.test(value);
        },
        maybeValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = value + '*';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return regex.test(value);
        },
        excludeValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = "[^ + " + value + "]";
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return regex.test(value);
        },
        wildcardAndValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = "." + value;
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return regex.test(value);
        },
        specialCharacterWithUnderscore: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = '\W';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return regex.test(value);
        },
        whiteSpace: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = '\s';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return regex.test(value);
        }
    },
    match: {
        no: {
            /**
             * Test if a value is a number
             * @param value: value to test
             * @param isGlobal: flag g (default true)
             */
            numbers: function (value, isGlobal) {
                if (isGlobal === void 0) { isGlobal = true; }
                var regex = isGlobal ? new RegExp('[^0-9]', 'g') : new RegExp('[^0-9]');
                return value.match(regex);
            },
            /**
             * @param value: value to test
             * @param isGlobal: flag g (default true)
             * @param isCaseIgnore: flag i (default true)
             */
            letters: function (value, isGlobal, isCaseIgnore) {
                if (isGlobal === void 0) { isGlobal = true; }
                if (isCaseIgnore === void 0) { isCaseIgnore = true; }
                var regexStr = '[^a-z]';
                var flag = '';
                if (isGlobal) {
                    flag += 'g';
                }
                if (isCaseIgnore) {
                    flag += 'i';
                }
                var regex = new RegExp(regexStr, flag);
                return value.match(regex);
            },
            /**
             * @param value: value to test
             */
            whiteSpace: function (value) {
                return value.match(/\S/g);
            }
        },
        startWithValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = '^' + value;
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return regex.test(value);
        },
        endWithValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = value + '$';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return value.match(regex);
        },
        oneOrMoreValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = value + '+';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return value.match(regex);
        },
        maybeValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = value + '*';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return value.match(regex);
        },
        excludeValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = "[^ + " + value + "]";
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return value.match(regex);
        },
        wildcardAndValue: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = "." + value;
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return value.match(regex);
        },
        specialCharacterWithUnderscore: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = '\W';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return value.match(regex);
        },
        whiteSpace: function (value, isGlobal, isCaseIgnore) {
            if (isGlobal === void 0) { isGlobal = true; }
            if (isCaseIgnore === void 0) { isCaseIgnore = true; }
            var regexStr = '\s';
            var flag = '';
            if (isGlobal) {
                flag += 'g';
            }
            if (isCaseIgnore) {
                flag += 'i';
            }
            var regex = new RegExp(regexStr, flag);
            return value.match(regex);
        }
    }
};
