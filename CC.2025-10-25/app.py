# Your task is very simple. Given an input string s, case_sensitive(s), check whether all letters are lowercase or not. Return True/False and a list of all the entries that are not lowercase in order of their appearance in s.

# For example, case_sensitive('codewars') returns [True, []], but case_sensitive('codeWaRs') returns [False, ['W', 'R']].

# Goodluck :)

# Have a look at my other katas!

def case_sensitive(s):
    upper_case = []
    for char in s:
        if 'A' <= char <= 'Z':
            upper_case.append(char)
    
    is_lower_case = len(upper_case) == 0
    return [is_lower_case, upper_case]