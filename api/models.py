from django.db import models

# Create your models here.
class GenscriptEntry(models.Model):
    protein_name = models.CharField(max_length=255)
    uniprot_id = models.CharField(max_length=10)
    residue_index = models.IntegerField(default=1, null=False)
    amino_sequence = models.TextField(null=False)
    dna_sequence = models.TextField(null=True, blank=True, default="")

