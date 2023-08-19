/* eslint-disable no-useless-escape */
export const data = [
  {
    name: 'Email Regex',
    image: '✉️',
    caption: `A regular expression to check whether a String is a valid Email`,
    description:
      'The regular expressions below can be used to validate if a string is an email address and to extract email addresses from a string. This validation method however does not guarantee that the emails validated and extracted actually exist.',
    regex: `RegExp(r'^\S+@\S+\.\S+$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `emailRegex.hasMatch("dart@gmail.com")`,
    to: '/email',
  },
  {
    name: 'URL Regex',
    caption: `A regular expression to check whether a String is a valid URL`,
    image: '🌐',
    description:
      'URL regular expressions can be used to verify if a string has a valid URL format as well as to extract an URL from a string.',
    regex: `RegExp(r'^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{(1, 256)}
                \.[a-zA-Z0-9()]{(1, 6)}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `urlRegex.hasMatch("https://stackoverflow.com/questions/49757486/how-to-use-regex-in-dart")`,
    to: '/email',
  },

  {
    name: 'Phone Regex',
    caption: `A regular expression to check whether a String is a valid Phone`,
    image: '📞',
    description:
      'The regular expressions below can be used to validate if a string is a valid phone number format and to extract a phone number from a string. Please note that this validation can not tell if a phone number actually exists.',
    regex: `RegExp(r'^\+?[1-9][0-9]{7,14}$');`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `phoneRegex.hasMatch("+2547195")`,
    to: '/email',
  },
  {
    name: 'IP Regex',
    caption: `A regular expression to check whether a String is a valid IP`,
    image: '📱',
    description:
      'The regular expressions below can be used to validate if a string is a valid IP address format and to extract an IP address from a string. Please note that this validation can not tell if an IP address actually exists.',
    regex: `RegExp(r'^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `ipRegex.hasMatch("192.168.0")`,
    to: '/email',
  },
  {
    name: 'Date Regex',
    caption: `A regular expression to check whether a String is a valid Date`,
    image: '🗓',
    description:
      'Date regular expressions can be used to validate if a string has a valid date format and to extract a valid date from a string.',
    regex: `RegExp(r'^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `dateRegex.hasMatch("12/20/2000")`,
    to: '/email',
  },
  {
    name: 'Number Regex',
    caption: `A regular expression to check whether a String is a valid Number`,
    image: '3️⃣',
    description:
      'Numbers only (or digits only) regular expressions can be used to validate if a string contains only numbers.',
    regex: `RegExp(r'^\d+$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `numberRegex.hasMatch(1)`,
    to: '/email',
  },

  {
    name: 'UUID Regex',
    caption: `A regular expression to check whether a String is a valid UUID`,
    image: '#️⃣',
    description:
      'UUID is a 128-bit label used for identifications in computer systems.',
    regex: `RegExp(r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `uuidRegex.hasMatch("123e4567-e89b-12d3-a456-426614174000")`,
    to: '/email',
  },
  {
    name: 'Word Regex',
    caption: `A regular expression to check whether a String is a valid Word`,
    image: '✍️',
    description:
      'This regular expression can be used to validate that a given string contains only characters in it or extract two words from a given string.',
    regex: `RegExp(r'^\b(?:\w|-)+\b$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `wordRegex.hasMatch("Dart")`,
    to: '/email',
  },
  {
    name: 'ZIP Regex',
    caption: `A regular expression to check whether a String is a valid ZIP`,
    image: '🤐',
    description:
      'ZIP code (US postal code) regular expression can be used to verify if a given string contains a valid ZIP code or extract ZIP code from a string. Supports both 5-digit and 9-digit (ZIP+4) formats.',
    regex: `RegExp(r'^[0-9]{5}(?:-[0-9]{4})?$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `zipRegex.hasMatch("00100")`,
    to: '/email',
  },
  {
    name: 'GUID Regex',
    caption: `A regular expression to check whether a String is a valid GUID`,
    image: '⌘',
    description:
      'GUID is an acronym for Globally Unique Identifier and used for resource identification. The term is generally used instead of UUID when working with Microsoft technologies.',
    regex: `RegExp(r'^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `guidRegex.hasMatch("51d52cf1-83c9-4f02-b117-703ecb728b74")`,
    to: '/email',
  },

  {
    name: 'Password Regex',
    caption: `A regular expression to check whether a String is a valid Password`,
    image: '🫣',
    description:
      'Password regular expression can be used to verify that a password provided is strong enough to provide better protection against bot brute force attacks. This method, however, does not guarantee that a password will have enough entropy to be completely safe.',
    regex: `RegExp(r'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    code: `passwordRegex.hasMatch("dart@-t")`,
    to: '/email',
  },
  {
    name: 'Mac address Regex',
    caption: `A regular expression to check whether a String is a valid Mac address`,
    image: '📍',
    description:
      'Mac address is a unique identifier assigned to network interface controllers like WiFi routers, Ethernet controllers, etc. It has a format of six groups of 2 hexadecimal digits separated by dash or colon (e.g. 00:00:5e:00:53:af). Mac address regular expression can be used to validate that a certain string contains mac address or extract mac address from a given string.',
    regex: `RegExp(r'^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$')`,
    code: `macRegex.hasMatch("00:00:5e:00:53:af")`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    to: '/email',
  },
  {
    name: 'Street address Regex',
    caption: `A regular expression to check whether a String is a valid Street address`,
    image: '🏘',
    description:
      'Usually, it’s a bad idea to validate street addresses using regular expressions (read below). But in some cases it might make sense and here’s a regular expression that can help with that',
    regex: `RegExp(r'^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$')`,
    code: `sreetRegex.hasMatch("3344 W Alameda Avenue, Lakewood, CO 80222")`,
    extraInfoTitle: '',
    extraInfoDesc: '',
    to: '/email',
  },
];
