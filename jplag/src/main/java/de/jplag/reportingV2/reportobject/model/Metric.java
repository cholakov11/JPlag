package de.jplag.reportingV2.reportobject.model;

import java.util.List;

public class Metric {
	private String name;
	private float threshold;
	private List<Integer> distribution;
	private List<TopComparison> topComparisons;

	public Metric(String name, float threshold, List<Integer> distribution, List<TopComparison> topComparisons) {
		this.name = name;
		this.threshold = threshold;
		this.distribution = distribution;
		this.topComparisons = topComparisons;
	}

	public String getName() {
		return name;
	}

	public float getThreshold() {
		return threshold;
	}

	public List<Integer> getDistribution() {
		return distribution;
	}

	public List<TopComparison> getTopComparisons() {
		return topComparisons;
	}
}