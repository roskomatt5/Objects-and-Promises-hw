def spin_words(sentence):
    new_list = sentence.split(" ")
    rev_list = []
    for i in new_list:
        if len(i) >= 5:
            rev_list.append("".join(i[::-1]))

        else:
            rev_list.append(i) 
    return " ".join(rev_list)

res = spin_words("Hey fellow warriors")

print(res)