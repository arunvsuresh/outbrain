def max_val_of_consecutive_nums(lst):
	res = []
	if len(lst) < 2:
		raise Exception('array only contains 1 number; must provide at least 2 numbers in array')

	for i in range(1, len(lst)):
		consecutive_sum = lst[i - 1] + lst[i]
		res.append(consecutive_sum)
	return max(res)

print max_val_of_consecutive_nums([10, -2, 5, 6, -5])