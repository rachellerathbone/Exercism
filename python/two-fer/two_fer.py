def two_fer(name="you"):
    if name == "":
        return "One for you, one for me."
    else:
        return "One for {0}, one for me.".format(name)
