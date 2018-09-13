def max_val_of_consecutive_nums(lst):
	res = []
	if len(lst) < 2:
		raise Exception('array only contains 1 number')

	for i in range(1, len(lst)):
		consecutive_sum = lst[i - 1] + lst[i]
		res.append(consecutive_sum)
	return max(res)
