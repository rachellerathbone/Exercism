def to_rna(dna_strand):
    nucleotides = {'A': 'U',
                   'C': 'G',
                   'T': 'A',
                   'G': 'C'}

    result = ''.join([nucleotides.get(ch) for ch in dna_strand])
    return result

# The following solution needs to be run with python3 because
# the maketrans() method does not exist on str in python2
# dna_to_rna = str.maketrans('CGAT', 'GCUA')
#
# def to_rna(dna_strand):
#
# 	if any(c not in 'CGAT' for c in dna_strand):
# 		return ''
#
# 	return dna_strand.translate(dna_to_rna)
