def reverse(text):
    split_str = [x for x in text]
    split_str.reverse()
    reversedStr = ""
    reversedStr = reversedStr.join(split_str)
    return reversedStr
